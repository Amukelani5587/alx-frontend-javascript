import loadBalancer from "./7-load_balancer";

const usSuccess = 'Downloading from US is faster';
const chinaSuccess = 'Downloading from China is faster';

const promiseUS = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUSSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseChina = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUS, promiseChina));
    console.log(await loadBalancer(promiseUSSlow, promiseChina));
}

test();
