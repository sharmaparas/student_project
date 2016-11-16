using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Student_Project.Web.Startup))]
namespace Student_Project.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
