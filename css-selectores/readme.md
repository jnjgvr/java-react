1. Selecciona todos los elementos  
```*{ }```

2. Selecciona todos los elementos que sean de tipo P  
```p{ }```

3. Selecciona el elemento con ID title-1  
```#title-1{ }```

4. Selecciona todos los elementos que pertenezca a la clase .bg-yellow  
```.bg-yellow{ }```

5. Selecciona todos los elementos que tengan el atributo ID  
```[id]{ }```

6. Selecciona todos los elementos que tengan el atributo ID y como valor title-1  
```[id="title-1"]{ }```

7. Selecciona todos los elementos que tengan el atributo HREF con un valor https://www.yahoo.com  
```[href="https://www.yahoo.com"]{ }```

8. Selecciona todos los elementos que tengan el atributo class con un valor que empiece por title  
```[class|="title"]{ }```

9. Selecciona todos los elementos que tengan el atributo HREF y que acaben en .com  
```[href$=".com"]{ }```

10. Selecciona todos los elementos que tengan el atributo class con un valor title, title-1, title-2...  
```[class*="title"]{ }```

11. Selecciona todos los elementos que tengan un atributo href y cuyo valor contenga 127  
```[href*="127"]{ }```

12. Selecciona todos los elementos que tengan el atributo href y cuyo valor empieze por http  
```[href^="http"]{ }```

13. Selecciona los elementos que sean A, P, o H1 desde una única regla CSS  
```a, p, h1{ }```

14. Selecciona todos los elementos que pertezcan a main y que sean P  
```main p{ }```

15. Selecciona el siguiente elemento que sea hermano de H1  
```h1 + *{ }```

16. Selecciona todos los elementos que sean hermanos de H1  
```h1 ~ *{ }```

17. Selecciona todos los elementos hijos directos de main  
```main > *{ }```