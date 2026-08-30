import importlib.util
from pathlib import Path

ROOT=Path(__file__).parent

def _load_actions(name):
    path=ROOT/f"{name}.py"
    spec=importlib.util.spec_from_file_location(f"bonds_mesh_{name}", path)
    if spec is None or spec.loader is None: raise ImportError(name)
    module=importlib.util.module_from_spec(spec); spec.loader.exec_module(module); return module
