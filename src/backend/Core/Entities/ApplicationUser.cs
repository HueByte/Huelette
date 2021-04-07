

using AspNetCore.Identity.Mongo.Model;

namespace Core.Entities
{
    public class ApplicationUser : MongoUser<string>
    {
        public string Avatar_Url { get; set; }
    }
}