<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link to="/">
                    <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                </router-link>
                
            </li>
            <li class="nav-item">
                <router-link to="/signup">
                    <a class="nav-link" >Sign Up <span class="sr-only">(current)</span></a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/signin">
                    <a class="nav-link" >Sign In <span class="sr-only">(current)</span></a>
                </router-link>
            </li>
             <li class="nav-item">
                <router-link to="/admin">
                    <a class="nav-link" >Admin<span class="sr-only">(current)</span></a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/cart">
                    <a class="nav-link" >Cart<span class="sr-only">(current)</span></a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu">
                    <a class="nav-link" >Menu<span class="sr-only">(current)</span></a>
                </router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>