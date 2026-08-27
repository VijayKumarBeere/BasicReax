using System.ComponentModel.DataAnnotations;

namespace BloodDonation.Api.Models;

public class Donor
{
    [Key]
    public int Id { get; set; }

    [Required, StringLength(120)]
    public string FullName { get; set; } = string.Empty;

    [Required, StringLength(30)]
    public string Mobile { get; set; } = string.Empty;

    [Required, EmailAddress, StringLength(254)]
    public string Email { get; set; } = string.Empty;

    [Range(18, 65)]
    public int Age { get; set; }

    [Required, StringLength(3)]
    public string BloodType { get; set; } = string.Empty;

    [Required, StringLength(100)]
    public string City { get; set; } = string.Empty;

    public bool Available { get; set; } = true;

    public DateTime LastDonation { get; set; }
}