let count = 0;

function invisibleImg1() {

    switch (count) {
        case 0:
            document.getElementById("img1").src = "images\\eye_01.jpg";
            img1 = 'eye';
            count++;
            break;
        case 1:
            document.getElementById("img1").src = "images\\flower_01.jpg";
            img1 = 'flower';
            count++;
            break;
        case 2:
            document.getElementById("img1").src = "images\\goblin_01.jpg";
            img1 = 'goblin';
            count++;
            break;
        case 3:
            document.getElementById("img1").src = "images\\luffy_01.jpg";
            img1 = 'luffy';
            count++;
            break;
        case 4:
            document.getElementById("img1").src = "images\\sad_01.jpg";
            img1 = 'sad';
            count++;
            break;
        case 5:
            document.getElementById("img1").src = "images\\woman_01.jpg";
            img1 = 'woman';
            count++;
            break;
        default:
            document.getElementById("img1").src = "images\\baby_01.jpg";
            img1 = 'baby';
            count = 0;
    }
}

function invisibleImg2() {

    switch (count) {
        case 0:
            document.getElementById("img2").src = "images\\eye_02.jpg";
            img2 = 'eye';
            count++;
            break;
        case 1:
            document.getElementById("img2").src = "images\\flower_02.jpg";
            img2 = 'flower';
            count++;
            break;
        case 2:
            document.getElementById("img2").src = "images\\goblin_02.jpg";
            img2 = 'goblin';
            count++;
            break;
        case 3:
            document.getElementById("img2").src = "images\\luffy_02.jpg";
            img2 = 'luffy';
            count++;
            break;
        case 4:
            document.getElementById("img2").src = "images\\sad_02.jpg";
            img2 = 'sad';
            count++;
            break;
        case 5:
            document.getElementById("img2").src = "images\\woman_02.jpg";
            img2 = 'woman';
            count++;
            break;
        default:
            document.getElementById("img2").src = "images\\baby_02.jpg";
            img2 = 'baby';
            count = 0;
    }
}

function invisibleImg3() {

    switch (count) {
        case 0:
            document.getElementById("img3").src = "images\\eye_03.jpg";
            img3 = 'eye';
            count++;
            break;
        case 1:
            document.getElementById("img3").src = "images\\flower_03.jpg";
            img3 = 'flower';
            count++;
            break;
        case 2:
            document.getElementById("img3").src = "images\\goblin_03.jpg";
            img3 = 'goblin';
            count++;
            break;
        case 3:
            document.getElementById("img3").src = "images\\luffy_03.jpg";
            img3 = 'luffy';
            count++;
            break;
        case 4:
            document.getElementById("img3").src = "images\\sad_03.jpg";
            img3 = 'sad';
            count++;
            break;
        case 5:
            document.getElementById("img3").src = "images\\woman_03.jpg";
            img3 = 'woman';
            count++;
            break;
        default:
            document.getElementById("img3").src = "images\\baby_03.jpg";
            img3 = 'baby';
            count = 0;
    }
}

function invisibleImg4() {

    switch (count) {
        case 0:
            document.getElementById("img4").src = "images\\eye_04.jpg";
            img4 = 'eye';
            count++;
            break;
        case 1:
            document.getElementById("img4").src = "images\\flower_04.jpg";
            img4 = 'flower';
            count++;
            break;
        case 2:
            document.getElementById("img4").src = "images\\goblin_04.jpg";
            img4 = 'goblin';
            count++;
            break;
        case 3:
            document.getElementById("img4").src = "images\\luffy_04.jpg";
            img4 = 'luffy';
            count++;
            break;
        case 4:
            document.getElementById("img4").src = "images\\sad_04.jpg";
            img4 = 'sad';
            count++;
            break;
        case 5:
            document.getElementById("img4").src = "images\\woman_04.jpg";
            img4 = 'woman';
            count++;
            break;
        default:
            document.getElementById("img4").src = "images\\baby_04.jpg";
            img4 = 'baby';
            count = 0;
    }
}

function img()
{
    if ((img1 == img2)&&(img2 == img3)&&(img3 == img4))
    {
        document.getElementById("img1").style.border = ".5em solid red";
        document.getElementById("img2").style.border = ".5em solid red";
        document.getElementById("img3").style.border = ".5em solid red";
        document.getElementById("img4").style.border = ".5em solid red";
    }
}

