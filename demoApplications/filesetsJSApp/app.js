// Utility to show results
function showResult(data) {
  document.getElementById('results').textContent =
    typeof data === 'string' ? data : JSON.stringify(data, null, 2);
}

// --- Fileset selector logic ---
const filesetSelector = document.getElementById('filesetSelector');
const filesetLoading = document.getElementById('filesetLoading');
let filesets = [];

async function loadFilesets() {
  filesetLoading.style.display = 'inline';
  try {
    // Use domo.post to search filesets
    const res = await domo.post('/domo/files/v1/filesets/search', {});
    const { fileSets } = res;
    filesets = fileSets || [];
    filesetSelector.innerHTML = '';
    if (filesets.length === 0) {
      filesetSelector.innerHTML =
        '<option value="" disabled selected>No filesets found</option>';
      disableFilesetForms();
    } else {
      filesets.forEach((f) => {
        const opt = document.createElement('option');
        opt.value = f.id;
        opt.textContent = f.name ? `${f.name} (${f.id})` : f.id;
        filesetSelector.appendChild(opt);
      });
      filesetSelector.selectedIndex = 0;
      updateFilesetInputs(filesets[0].id);
      enableFilesetForms();
    }
  } catch (err) {
    filesetSelector.innerHTML =
      '<option value="" disabled selected>Error loading filesets</option>';
    disableFilesetForms();
  } finally {
    filesetLoading.style.display = 'none';
  }
}

function updateFilesetInputs(filesetId) {
  document.querySelectorAll('input[name="filesetId"]').forEach((input) => {
    input.value = filesetId;
  });
}

function disableFilesetForms() {
  document.querySelectorAll('form').forEach((form) => {
    if (form.querySelector('input[name="filesetId"]'))
      form
        .querySelectorAll('input,button')
        .forEach((el) => (el.disabled = true));
  });
}
function enableFilesetForms() {
  document.querySelectorAll('form').forEach((form) => {
    if (form.querySelector('input[name="filesetId"]'))
      form
        .querySelectorAll('input,button')
        .forEach((el) => (el.disabled = false));
  });
}

if (filesetSelector) {
  filesetSelector.addEventListener('change', function () {
    updateFilesetInputs(this.value);
  });
  loadFilesets();
}

// --- API Forms using domo.* methods ---

// Get File By Path
if (document.getElementById('getFileByPathForm')) {
  document.getElementById('getFileByPathForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const filePath = this.filePath.value;
    try {
      const res = await domo.get(
        `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
          filePath,
        )}`,
      );
      showResult(res);
    } catch (err) {
      if (err && err.status === 404) {
        showResult(
          err.body ||
            err.message ||
            '404 Not Found: The file or path does not exist.',
        );
      } else {
        showResult(err.message || err);
      }
    }
  };
}

// Get File By Id
if (document.getElementById('getFileByIdForm')) {
  document.getElementById('getFileByIdForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const fileId = this.fileId.value;
    try {
      const res = await domo.get(
        `/domo/files/v1/filesets/${filesetId}/files/${fileId}`,
      );
      showResult(res);
    } catch (err) {
      if (err && err.status === 404) {
        showResult(
          err.body ||
            err.message ||
            '404 Not Found: The file or ID does not exist.',
        );
      } else {
        showResult(err.message || err);
      }
    }
  };
}

// Download File By Id
if (document.getElementById('downloadFileByIdForm')) {
  document.getElementById('downloadFileByIdForm').onsubmit = async function (
    e,
  ) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const fileId = this.fileId.value;
    try {
      // domo.get returns JSON, so use fetch for binary download
      const res = await fetch(
        `/domo/files/v1/filesets/${filesetId}/files/${fileId}/download`,
      );
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'downloaded-file';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showResult('File downloaded.');
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Query Files
if (document.getElementById('queryFilesForm')) {
  document.getElementById('queryFilesForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const body = {
      query: this.query.value,
      directoryPath: this.directoryPath.value,
      topK: this.topK.value ? Number(this.topK.value) : undefined,
    };
    try {
      const res = await domo.post(
        `/domo/files/v1/filesets/${filesetId}/query`,
        body,
      );
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Upload File
if (document.getElementById('uploadFileForm')) {
  document.getElementById('uploadFileForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const file = this.file.files[0];
    const directoryPath = this.directoryPath.value;
    const formdata = new FormData();
    // Set content type to text/plain for all files
    formdata.append(
      'file',
      new File([file], file.name, { type: 'text/plain' }),
      file.name,
    );
    formdata.append('createFileRequest', JSON.stringify({ directoryPath }));
    try {
      // domo.post does not support FormData, so use fetch
      const res = await fetch(`/domo/files/v1/filesets/${filesetId}/files`, {
        method: 'POST',
        body: formdata,
      });
      showResult(await res.json());
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Delete Files By Path
if (document.getElementById('deleteFilesByPathForm')) {
  document.getElementById('deleteFilesByPathForm').onsubmit = async function (
    e,
  ) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const filePath = this.filePath.value;
    try {
      const res = await domo.delete(
        `/domo/files/v1/filesets/${filesetId}/path?path=${encodeURIComponent(
          filePath,
        )}`,
      );
      if (res === 1 || (res && res.status === 'success')) {
        showResult('File deleted successfully.');
      } else {
        showResult(res);
      }
    } catch (err) {
      if (err && err.status === 404) {
        showResult(
          err.body ||
            err.message ||
            '404 Not Found: The file or path does not exist.',
        );
      } else {
        showResult(err.message || err);
      }
    }
  };
}

// Delete File By Id
if (document.getElementById('deleteFileByIdForm')) {
  document.getElementById('deleteFileByIdForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    const fileId = this.fileId.value;
    try {
      const res = await domo.delete(
        `/domo/files/v1/filesets/${filesetId}/files/${fileId}`,
      );
      if (res === 1 || (res && res.status === 'success')) {
        showResult('File deleted successfully.');
      } else {
        showResult(res);
      }
    } catch (err) {
      if (err && err.status === 404) {
        showResult(
          err.body ||
            err.message ||
            '404 Not Found: The file or ID does not exist.',
        );
      } else {
        showResult(err.message || err);
      }
    }
  };
}

// Query Fileset (should call the files search endpoint with query body and params)
if (document.getElementById('queryFilesetForm')) {
  document.getElementById('queryFilesetForm').onsubmit = async function (e) {
    e.preventDefault();
    try {
      const filesetId = document.querySelector('input[name="filesetId"]').value;
      // Get values from the new UI fields
      const directoryPath = document.getElementById(
        'queryFilesetDirectoryPath',
      ).value;
      const immediateChildren = document.getElementById(
        'queryFilesetImmediateChildren',
      ).checked;
      const limitRaw = document.getElementById('queryFilesetLimit').value;
      const limit = limitRaw ? Number(limitRaw) : undefined;
      let body = {};
      const bodyRaw = document.getElementById('queryFilesetBody').value;
      if (bodyRaw) {
        try {
          body = JSON.parse(bodyRaw);
        } catch (err) {
          showResult('Invalid JSON in Advanced Query');
          return;
        }
      }
      // Build query params
      const params = new URLSearchParams();
      if (directoryPath) params.append('directoryPath', directoryPath);
      if (immediateChildren) params.append('immediateChildren', 'true');
      if (limit !== undefined) params.append('limit', limit);
      const url = `/domo/files/v1/filesets/${filesetId}/files/search?${params.toString()}`;
      const res = await domo.post(url, body);
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Create Fileset
if (document.getElementById('createFilesetForm')) {
  document.getElementById('createFilesetForm').onsubmit = async function (e) {
    e.preventDefault();
    let body;
    try {
      body = JSON.parse(this.body.value);
    } catch (err) {
      showResult('Invalid JSON in Body');
      return;
    }
    try {
      const res = await domo.post('/domo/files/v1/filesets', body);
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Get Fileset By Id
if (document.getElementById('getFilesetByIdForm')) {
  document.getElementById('getFilesetByIdForm').onsubmit = async function (e) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    try {
      const res = await domo.get(`/domo/files/v1/filesets/${filesetId}`);
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Update Fileset By Id
if (document.getElementById('updateFilesetByIdForm')) {
  document.getElementById('updateFilesetByIdForm').onsubmit = async function (
    e,
  ) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    let body;
    try {
      body = JSON.parse(this.body.value);
    } catch (err) {
      showResult('Invalid JSON in Body');
      return;
    }
    try {
      const res = await domo.post(`/domo/files/v1/filesets/${filesetId}`, body);
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Delete Fileset By Id
if (document.getElementById('deleteFilesetByIdForm')) {
  document.getElementById('deleteFilesetByIdForm').onsubmit = async function (
    e,
  ) {
    e.preventDefault();
    const filesetId = this.filesetId.value;
    try {
      const res = await domo.delete(`/domo/files/v1/filesets/${filesetId}`);
      showResult(res);
    } catch (err) {
      showResult(err.message);
    }
  };
}

// Main tab switching logic
const tabButtons = document.querySelectorAll('.tab-menu .tab');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    // Remove active from all tabs
    tabButtons.forEach((b) => b.classList.remove('active'));
    // Hide all tab contents
    tabContents.forEach((c) => (c.style.display = 'none'));
    // Activate this tab
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    const content = document.getElementById(`tab-${tabId}`);
    if (content) content.style.display = '';
    // Show first subtab for this tab
    const subtabMenu = content.querySelector('.subtab-menu');
    if (subtabMenu) {
      const firstSubtab = subtabMenu.querySelector('.subtab');
      if (firstSubtab) firstSubtab.click();
    }
  });
});

// Subtab switching logic (for each main tab)
document.querySelectorAll('.tab-content').forEach((tabContent) => {
  const subtabButtons = tabContent.querySelectorAll('.subtab-menu .subtab');
  const subtabContents = tabContent.querySelectorAll('.subtab-content');
  subtabButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      subtabButtons.forEach((b) => b.classList.remove('active'));
      subtabContents.forEach((c) => (c.style.display = 'none'));
      this.classList.add('active');
      const subtabId = this.getAttribute('data-subtab');
      const content = tabContent.querySelector(`#subtab-${subtabId}`);
      if (content) content.style.display = '';
    });
  });
  // Show first subtab by default
  if (subtabButtons.length) subtabButtons[0].click();
});
