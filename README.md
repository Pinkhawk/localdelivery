# localdelivery

_In windows_

**Set up Virtual ENV**

```bash
python -m venv myenv
```

**Activate Virtual ENV**

```bash
myenv\\Scripts\\activate
```

_PowerShell-_

```PowerShell
.\\myenv\\Scripts\\Activate.ps1
```

_If PowerShell blocks execution:_

_PowerShell-_

```PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

_Install Dependencies_

```bash
pip install -r requirements.txt
```

_Save dependencies_

```bash
pip freeze > requirements.txt
```

## FastAPI SetUP

_install FastAPI with the standard dependencies but without the `fastapi-cloud-cli`_

```bash
pip install "fastapi[standard-no-fastapi-cloud-cli]"
```
