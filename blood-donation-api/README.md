# Blood Donation API

ASP.NET Core 10 Web API for the blood-donation React application.

## Run in Visual Studio

1. Open `BloodDonation.sln` in Visual Studio 2026.
2. Set `blood-donation-api` as the startup project.
3. Ensure SQL Server LocalDB is installed, then run the project.

The configured database is `BloodDonationDb` on `(localdb)\\MSSQLLocalDB`. The initial migration has been applied with:

```powershell
dotnet ef database update --project .\blood-donation-api.csproj
```

The API is available at `http://localhost:5139`. The React Vite development server proxies `/api` requests to this URL.

## Endpoints

- `GET /api/donors`
- `GET /api/donors/{id}`
- `POST /api/donors`
- `PUT /api/donors/{id}`
- `DELETE /api/donors/{id}`

To use another SQL Server, override `ConnectionStrings:BloodDonation` in user secrets or environment-specific configuration before applying migrations.