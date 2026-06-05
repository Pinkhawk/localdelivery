# localdelivery backend

_In windows_

**Set up Virtual ENV**

```bash
python -m venv .venv
```

**Activate Virtual ENV**

```bash
.venv\Scripts\activate
```

_PowerShell-_

```PowerShell
.\venv\Scripts\Activate.ps1
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

### Run Locally

```
fastapi dev
```

---

# Recommended Structure

```
project/
├── backend/
│   ├── api/
│   ├── auth/
│   ├── users/
│       ├── router.py
│       ├── service.py
│       ├── repository.py
│       ├── schemas.py
│       └── models.py
│   ├── payments/
│   ├── notifications/
│   ├── reports/
│   ├── admin/
│   └── shared/

```

# WorkFlow
