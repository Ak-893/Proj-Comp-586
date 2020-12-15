using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpaServer1.Models
{
    public class Meal
    {
        public int MealID { get; set; }
        public string MealTYPE { get; set; }
        public string Restaurant { get; set; }
        public string MealCreationDate { get; set; }
    }
}