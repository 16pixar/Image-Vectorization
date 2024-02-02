#Image Vectorization: Genetic Algorithms
Project Description
This project focuses on image vectorization using genetic algorithms, inspired by the theory of species evolution. Following the principle that better-adapted individuals are more likely to survive and reproduce, we have developed a genetic algorithm capable of converting a black and white image (1 bit) into a linear drawing represented by a list of coordinates (x, y).

The main objective is to generate a population of individuals that evolves in each generation, where each individual consists of a version of the coordinate list progressively adjusting to converge on the input image. The fitness function, meticulously designed by our team, evaluates the quality of the resulting drawing and is crucial in the selection and reproduction of individuals.

Graphical Interface
Users can customize the program execution by entering the following parameters:

Target Image: The black and white image to be vectorized.
Maximum Generations: The maximum number of generations the algorithm will run.
Individuals per Generation: The number of individuals in each generational population.
Selection Percentage: Proportion of individuals selected for reproduction in each generation.
Mutation Percentage: Proportion of individuals allowed to mutate.
Combination Percentage: Proportion of individuals allowed to combine.
Other Parameters: Space for additional parameters defined by the team.
These percentages must sum to 100%, and intuitive graphical elements, such as sliders, are recommended for setting them. The interface also includes a timer that records the total time and the average time between generations.

Additionally, a linear graph is presented, showing the average fitness and the best fitness of each generation.

Implementation
The project is implemented in JavaScript and makes use of libraries like OpenCV.js to facilitate image operations. Various raster filters are allowed, but direct vectorization of the image is prohibited.

Users are encouraged to explore and adjust parameters to execute strategies designed by the team, providing valuable experimental data for future research and papers.

Explore, experiment, and contribute to the advancement of image vectorization through genetic algorithms!
