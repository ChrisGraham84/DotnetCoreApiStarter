using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreWebApi.Models;

namespace CoreWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalsController : ControllerBase
    {

        public IEnumerable<Animal> GetAllAnimals(){
            List<Animal> animals = new List<Animal>();
            animals.Add(new Animal{
                id = 1,
                name = "Chris",
                sound = "Bark",
                type = "Dog"
            });
             animals.Add(new Animal{
                id = 2,
                name = "Michael",
                sound = "Meow",
                type = "Cat"
            });
             animals.Add(new Animal{
                id = 1,
                name = "Gary",
                sound = "Oh No",
                type = "Garysaur"
            });

            return animals;
        }

        //Get api/animals
        [HttpGet]
        public ActionResult<IEnumerable<Animal>> Get(){
            
            return GetAllAnimals().ToList();
        }

          // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<Animal>> Get(int id)
        {
            return GetAllAnimals().Where(x => x.id == id).ToList();
        }
    }
}