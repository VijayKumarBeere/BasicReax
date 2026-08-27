using BloodDonation.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Api.Data;

public class BloodDonationDbContext(DbContextOptions<BloodDonationDbContext> options) : DbContext(options)
{
    public DbSet<Donor> Donors => Set<Donor>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Donor>(entity =>
        {
            entity.Property(donor => donor.LastDonation).HasColumnType("date");
            entity.HasIndex(donor => donor.BloodType);
            entity.HasIndex(donor => donor.City);
        });
    }
}