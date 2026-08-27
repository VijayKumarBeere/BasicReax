using BloodDonation.Api.Data;
using BloodDonation.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DonorsController(BloodDonationDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Donor>>> GetDonors(CancellationToken cancellationToken)
    {
        return Ok(await dbContext.Donors.AsNoTracking().OrderByDescending(donor => donor.Id).ToListAsync(cancellationToken));
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Donor>> GetDonor(int id, CancellationToken cancellationToken)
    {
        var donor = await dbContext.Donors.FindAsync([id], cancellationToken);
        return donor is null ? NotFound() : Ok(donor);
    }

    [HttpPost]
    public async Task<ActionResult<Donor>> CreateDonor(Donor donor, CancellationToken cancellationToken)
    {
        donor.Id = 0;
        dbContext.Donors.Add(donor);
        await dbContext.SaveChangesAsync(cancellationToken);
        return CreatedAtAction(nameof(GetDonor), new { id = donor.Id }, donor);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateDonor(int id, Donor donor, CancellationToken cancellationToken)
    {
        if (id != donor.Id)
        {
            return BadRequest("The route id must match the donor id.");
        }

        if (!await dbContext.Donors.AnyAsync(existing => existing.Id == id, cancellationToken))
        {
            return NotFound();
        }

        dbContext.Entry(donor).State = EntityState.Modified;
        await dbContext.SaveChangesAsync(cancellationToken);
        return Ok(donor);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteDonor(int id, CancellationToken cancellationToken)
    {
        var donor = await dbContext.Donors.FindAsync([id], cancellationToken);
        if (donor is null)
        {
            return NotFound();
        }

        dbContext.Donors.Remove(donor);
        await dbContext.SaveChangesAsync(cancellationToken);
        return Ok(new { id });
    }
}