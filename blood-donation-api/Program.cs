using BloodDonation.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<BloodDonationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BloodDonation")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("BloodDonationFrontend", policy =>
        policy.WithOrigins("http://localhost:5173", "http://localhost:4173")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

builder.Services.AddControllers();

var app = builder.Build();
app.UseRouting();

app.UseCors("BloodDonationFrontend");
app.UseAuthorization();

app.MapControllers();

app.Run();
