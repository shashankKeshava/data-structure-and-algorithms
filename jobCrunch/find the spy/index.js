function findRoutes(routes) {
    //   Index the Routes: Dest=> Source Pattern
    const reverseIndexRoutes = routes.reduce((accumulator, currentElement) => {
        const [src, dest] = currentElement;
        accumulator[dest] = src;
        return accumulator;
    }, {});

    //   Convert routes into Map for easier lookup
    const routeMap = new Map(routes);

    //   List of source cities
    const listOfSourceCities = routes.map((route) => {
        const [src, dest] = route;
        return src;
    });

    //   Find the initial source city
    let source = listOfSourceCities.find((city) => !reverseIndexRoutes[city]);

    let completeRoute = [];

    while (routeMap.size !== 0) {
        completeRoute.push(source);
        const destination = routeMap.get(source);
        routeMap.delete(source);
        source = destination;
    }

    completeRoute.push(source);
    return completeRoute.join(", ");
}