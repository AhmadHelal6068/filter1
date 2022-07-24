let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let invert = document.getElementById("invert");
let opacity = document.getElementById("opacity");


let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); // عشان نرسم في الكانفاس واعطيه ما سارسم مثل صورة او غيره


// وظيفة لارجاع القيمة الافتراضية لل فلاتير
function resetValue (){
    img.style.filter = "none";
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
    invert.value = '0';
}


// حذف الازرار قبل تحميل الصورة
window.onload = function(){
    download.style.display = "none";
    reset.style.display = "none";
    imgBox.style.display = "none";
}

// اضافة ازرار التحكم بعد اضافة الصوره
upload.onchange = function(){

    resetValue() // اشغل الوظيفة عند اختيار صورة

    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";

    // قراءة الصوره لتحميلها للموقع
    let file = new FileReader(); // انشاء متغير للوصول الى الملفات
    file.readAsDataURL(upload.files[0]) // الوصول للداتا وتحزين الصورة المختارة عن طريق الاينبوت ويلي راح تاخد الاينديكس صفر

    // جلب الصورة المخزنة وتحميلها للسورس الصورة
    file.onload = function(){
        img.src = file.result;
    }

    // تخزين نسخة من الصورة داخل الكانفاس
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    }
}


// جلب جميع الفلاتر
let filters = document.querySelectorAll("ul li input"); //// جلب الفلاتير لاعطاء قيم لها
// عمل لوب لجميع الفلاتر للتحكم بها واعطائها قيمها
filters.forEach(filter => {
    filter.addEventListener('input', function(){
        // اضافة الفلاتر للصورة
        // img.style
        ctx.filter = 
        `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
            invert(${invert.value}%)
            
            `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // رسم شكل الصورة
    })
})

// تنزيل الصور
// download.onclick = function(){
//     download.href = img.src;
// }
download.onclick = function(){
    download.href = canvas.toDataURL();
}



// 
// let slideValue = document.querySelectorAll("small");
// let slideInput = document.querySelectorAll(".slider");
// slideInput.forEach(input => {
    //     input.oninput = function(){
//         slideValue.forEach(val => {
//             let value = input.value;
//             val.textContent = value;
//         })
//     }
// })

const li = document.querySelectorAll("ul li")
for(let i=0; i<li.length; i++){
    const slideValue = li[i].querySelector("small");
    const slideInput = li[i].querySelector(".slider");

    function customsSlider(){
        // let value = slideInput.value;
        slideValue.innerHTML = slideInput.value;
    }
    customsSlider();

    slideInput.addEventListener("input", () =>{
        customsSlider();
    })
}