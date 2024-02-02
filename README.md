# Image Vectorization: Genetic Algorithms

## Authors

**Aarón Piñar Mora.**

**Alvaro Moreira Villalobos.**

## Project Description
This project focuses on image vectorization using genetic algorithms, inspired by the theory of species evolution. Following the principle that better-adapted individuals are more likely to survive and reproduce, we have developed a genetic algorithm capable of converting a black and white image (1 bit) into a linear drawing represented by a list of coordinates (x, y).

The main objective is to generate a population of individuals that evolves in each generation, where each individual consists of a version of the coordinate list progressively adjusting to converge on the input image. The fitness function, meticulously designed by our team, evaluates the quality of the resulting drawing and is crucial in the selection and reproduction of individuals.

# Graphical Interface
Users can customize the program execution by entering the following parameters:

- **Target Image:** The black and white image to be vectorized.
- **Maximum Generations:** The maximum number of generations the algorithm will run.
- **Individuals per Generation:** The number of individuals in each generational population.
- **Selection Percentage:** Proportion of individuals selected for reproduction in each generation.
- **Mutation Percentage:** Proportion of individuals allowed to mutate.
- **Combination Percentage:** Proportion of individuals allowed to combine.
- **Other Parameters:** Space for additional parameters defined by the team.

These percentages must sum to 100%, and intuitive graphical elements, such as sliders, are recommended for setting them. The interface also includes a timer that records the total time and the average time between generations.

Additionally, a linear graph is presented, showing the average fitness and the best fitness of each generation.

# Implementation
The project is implemented in JavaScript and makes use of libraries like OpenCV.js to facilitate image operations. Various raster filters are allowed, but direct vectorization of the image is prohibited.

Users are encouraged to explore and adjust parameters to execute strategies designed by the team, providing valuable experimental data for future research and papers.

Explore, experiment, and contribute to the advancement of image vectorization through genetic algorithms!

# Results 
![image](https://github.com/16pixar/Vectorization-of-Images/assets/125222286/1e68e75b-3621-48f1-8b5b-6ee25b02c04f)
![image](https://github.com/16pixar/Vectorization-of-Images/assets/125222286/41d021bd-9855-468b-8b48-e5bc44c1e3e8)
![image](https://github.com/16pixar/Vectorization-of-Images/assets/125222286/3993424e-b4d7-4d7b-99ee-86789a794042)
![image](https://github.com/16pixar/Vectorization-of-Images/assets/125222286/7226ae55-af4f-4601-b20c-41771f2cd52c)

# Project Overview

In this project, a point-based representation of individuals has been employed to generate lines in OpenCV. Fitness evaluation has been conducted through a fitness function comparing the similarity between the points of individuals and the points of the target image. Fundamental principles of genetic algorithms, such as selection, reproduction, and mutation, have been applied to evolve the population and generate individuals that increasingly resemble the desired drawing.

It's important to note that the amount of data used in the process can have a significant impact on the efficiency and total time of the algorithm. A larger amount of data, such as a higher-resolution image, may increase the complexity and processing time needed to evaluate the fitness of individuals and apply mutation. Conversely, insufficient data may limit genetic diversity and the algorithm's ability to find optimal solutions.

Throughout the project development, the importance of user parameter configuration has been considered, including the number of individuals in the population, the mutation percentage, and the number of generations. These parameters can be adjusted based on the amount of data and problem complexity to strike a balance between exploring the search space and converging towards quality solutions.

## Key Insights

In conclusion, this project has demonstrated that genetic algorithms are a powerful and versatile tool for the automatic generation of linear drawings from black and white images. The obtained results are promising and lay the groundwork for future research and improvements in the field of artistic generation. It's crucial to consider the impact of data quantity on the mutation process and its influence on the total algorithm time. This understanding allows for adjustments and optimizations to achieve efficient and high-quality results.

The project accommodates the use of larger images, and experimentation is encouraged, always with caution, as array sizes can become enormous.


