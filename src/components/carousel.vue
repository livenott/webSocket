<template>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="d-block w-100" src="" alt="First slide">
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Second slide">
        </div>
    </div>
    </div>
</template>
<script>
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
    })
</script>