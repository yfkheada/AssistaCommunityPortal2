using Microsoft.AspNet.Mvc;


namespace AssistaCommunityPortal.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Message() => PartialView();
        
        public IActionResult Numbers() => PartialView();
    }
}