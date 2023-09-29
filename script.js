document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Відмінити стандартну подію відправки форми

    try {
        // Регулярні вирази для перевірки валідності введених даних
        var pibPattern = /^[А-ЯЁа-яё]+\s[А-ЯЁа-яё]\.\s[А-ЯЁа-яё]\.$/;
        var variantPattern = /^\d{1,2}$/;
        var phonePattern = /^\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/;
        var facultyPattern = /^[А-ЯЁЇІа-яёїі\s]+$/;
        var addressPattern = /^м\.\s[А-ЯЁЇІа-яёїі\s]+$/;

        // Отримати значення з форми
        var pib = document.getElementById("pib");
        var variant = document.getElementById("variant");
        var phone = document.getElementById("phone");
        var faculty = document.getElementById("faculty");
        var address = document.getElementById("address");

        // Видалити клас "error" з усіх рядків
        pib.classList.remove("error");
        variant.classList.remove("error");
        phone.classList.remove("error");
        faculty.classList.remove("error");
        address.classList.remove("error");

        // Перевірка валідності даних і підсвічування помилкових рядків
        var isValidPib = pibPattern.test(pib.value);
        var isValidVariant = variantPattern.test(variant.value);
        var isValidPhone = phonePattern.test(phone.value);
        var isValidFaculty = facultyPattern.test(faculty.value);
        var isValidAddress = addressPattern.test(address.value);

        if (!isValidPib) {
            pib.classList.add("error");
        }
        if (!isValidVariant) {
            variant.classList.add("error");
        }
        if (!isValidPhone) {
            phone.classList.add("error");
        }
        if (!isValidFaculty) {
            faculty.classList.add("error");
        }
        if (!isValidAddress) {
            address.classList.add("error");
        }

        // Виведення результатів або повідомлення про помилки
        if (isValidPib && isValidVariant && isValidPhone && isValidFaculty && isValidAddress) {
            alert("Введена інформація вірна:\nПІБ: " + pib.value + "\nВаріант: " + variant.value + "\nТелефон: " + phone.value + "\nФакультет: " + faculty.value + "\nАдреса: " + address.value);
			var inputData = {
                pib: pib.value,
                variant: variant.value,
                phone: phone.value,
                faculty: faculty.value,
                address: address.value
            };
			localStorage.setItem("inputData", JSON.stringify(inputData));

            // Перенаправлення на окрему сторінку
            window.location.href = "result.html";
        } else {
            throw new Error("Будь ласка, виправте наступні помилки.");
        }
    } catch (error) {
        alert(error.message);
    }
};
