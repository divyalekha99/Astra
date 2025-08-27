using Microsoft.AspNetCore.Mvc;

namespace AstraBackend.Controllers;

[ApiController]
[Route("[controller]")]

public class EventLogsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var logs = new[]
        {
            new { id = 1, name = "Test Log", file_path = "/tmp/test-log.xes", created_at = DateTime.UtcNow }
        };
        return Ok(logs);
    }
}