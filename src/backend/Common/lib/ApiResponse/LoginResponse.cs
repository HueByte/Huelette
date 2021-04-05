using System;
using System.Collections.Generic;

namespace Common.ApiResponse
{
    public class LoginResponse
    {
        public string token { get; set; }
        public string tokenType { get; set; }

        public DateTime? expiresDate { get; set; }

        public List<string> Errors { get; set; }

        public bool isSuccess { get; set; } = false;
        
        
        
        
        

        
        
        
        
        
        
    }
}