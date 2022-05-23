using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OOBS.Bootstrap
{
   
    public static class WebApiConfig
    {

        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes

            
            config.MapHttpAttributeRoutes();
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            ICorsPolicyProvider corsPolicyProvider = new EnableCorsAttribute("*", "*", "*");
            //EnableCorsAttribute cors= new EnableCorsAttribute("", "", "");

            config.EnableCors(corsPolicyProvider);
            config.Formatters.Remove(config.Formatters.XmlFormatter);

        }

     
    }
}
