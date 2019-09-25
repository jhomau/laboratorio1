function candies(n,m){
    var sobrante,particion;
    sobrante=m%n;
    particion=(m-sobrante)/n;
    return particion;
}
console.log(candies(3,10));