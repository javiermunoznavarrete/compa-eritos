		function alumnos(name, age, gender) {

			    this.name = name;
			    this.age = age;
			    this.gender = gender;
		}
var sara = new alumnos("sara",28,2);
var matias = new alumnos("matias",30,1);
var juan = new alumnos("juan",22,1);
var patricio = new alumnos("patricio",31,1);
var esteban = new alumnos("esteban",25,1);
var javiera = new alumnos("javiera",26,2);
 
 var compañeros = [sara, matias, juan, patricio, esteban, javiera]
console.log(compañeros.length);

var hombres =[]
var mujeres =[]
var edad_hombre= 0
var edad_mujer= 0

for (var i =0 ;  i < compañeros.length ; i++) {

 	if (compañeros[i].gender == 2) {
		 		mujeres.push(compañeros[i]);
		 		edad_mujer = edad_mujer + compañeros[i].age;
		 	}

		 	if (compañeros[i].gender == 1) {
		 		hombres.push(compañeros[i]);
		 		edad_hombre	= edad_hombre + compañeros[i].age;
		 	}


		 }

		 var todas_edades = edad_mujer + edad_hombre;

		 
		 

		 console.log('Las Mujeres son:');
		 console.log(mujeres);

		 console.log('Los Hombres son:');
		 console.log(hombres);
		 
		 console.log('La edad de las mujeres es : '+edad_mujer);
		 console.log('La edad de los hombres es : '+edad_hombre);
		 console.log('La suma total de las edades es : '+todas_edades);
