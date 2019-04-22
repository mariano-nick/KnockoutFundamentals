using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BasketballPlaybook.Startup))]
namespace BasketballPlaybook
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
