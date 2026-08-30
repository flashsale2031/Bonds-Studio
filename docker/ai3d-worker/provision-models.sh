#!/usr/bin/env bash
set -euo pipefail

MODEL_DIR="${MODEL_DIR:-/models}"
mkdir -p "$MODEL_DIR"

python - <<'PY'
import os
from huggingface_hub import snapshot_download

root=os.environ.get('MODEL_DIR','/models')
# TripoSR is the unrestricted fallback/draft path.
snapshot_download(repo_id='stabilityai/TripoSR', local_dir=os.path.join(root,'triposr'), local_dir_use_symlinks=False)

# Stable Fast 3D is gated upstream. Provision only after the worker has
# authenticated to Hugging Face and the account has accepted the model terms.
token=os.environ.get('HF_TOKEN')
if os.environ.get('ENABLE_SF3D','0')=='1':
    if not token:
        raise SystemExit('ENABLE_SF3D=1 requires HF_TOKEN; do not store it in the repository.')
    snapshot_download(repo_id='stabilityai/stable-fast-3d', token=token, local_dir=os.path.join(root,'stable-fast-3d'), local_dir_use_symlinks=False)
PY

echo "AI 3D model provisioning complete."
