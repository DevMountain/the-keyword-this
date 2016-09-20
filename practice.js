//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //the purpose of the this keyword is so when we create a new obj/function, the code will know where to reference defined variables from.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //explicit - we are declaring and telling the code exactly where THIS is referring to
      //implicit - the code will imply where the reference is coming based on whatever object is to the left of the period
      //window - global 
      // new/constructor - we are using the NEW keyword as a sort of "factory" that will mass produce objects for us
  // 3) What is the difference between call and apply?

      //Answer
      //both are similar however apply takes the parameters in an array where call does not.
  // 4) What does .bind do?

      //Answer
      //binds the function with whatever context/object is passed into it.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "Mikechi4",
      email: "mike.chi4@gmail.com",
      getUsername: function(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.moveCar = function(){
    var move;
    move += 10;
    return move;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
  //undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //getUserName function
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
