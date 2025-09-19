// دالة لتبديل الوضع بين الليلي والنهاري
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // تحديث أيقونة الزر
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
        toggleButton.style.backgroundColor = isDarkMode ? '#4c51bf' : '#6e8efb';
    }
    
    // حفظ التفضيل في localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // تطبيق التنسيقات على العناصر الإضافية
    applyDarkModeToAdditionalElements(isDarkMode);
}

// تطبيق التنسيقات على العناصر الإضافية
function applyDarkModeToAdditionalElements(isDarkMode) {
    // تطبيق التنسيقات على العناصر التي قد لا تكون مغطاة بتنسيقات CSS الأساسية
    const additionalElements = document.querySelectorAll('.services, .slider, .signup-section, .login-section, .skills-section, .services-section, .contact-section, .testimonials-section');
    
    additionalElements.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#1a1a1a';
            element.style.color = '#f0f0f0';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
        }
    });
}

// تطبيق الوضع المحفوظ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // إضافة زر التبديل إلى واجهة المستخدم
    addToggleButton();
    
    // تحديث أيقونة الزر بناءً على الوضع الحالي
    updateToggleButtonIcon();
    
    // تطبيق التنسيقات على العناصر الإضافية
    applyDarkModeToAdditionalElements(isDarkMode);
});

// إضافة زر التبديل إلى واجهة المستخدم
function addToggleButton() {
    // التحقق إذا كان الزر موجوداً بالفعل
    if (document.getElementById('dark-mode-toggle')) {
        return;
    }
    
    // إنشاء زر التبديل
    const toggleButton = document.createElement('button');
    toggleButton.id = 'dark-mode-toggle';
    toggleButton.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    toggleButton.title = 'تبديل الوضع الليلي/النهاري';
    toggleButton.setAttribute('aria-label', 'تبديل الوضع الليلي والنهاري');
    
    // إضافة styles للزر
    Object.assign(toggleButton.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: document.body.classList.contains('dark-mode') ? '#4c51bf' : '#6e8efb',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease'
    });
    
    // إضافة الزر إلى body
    document.body.appendChild(toggleButton);
    
    // إضافة حدث النقر على الزر
    toggleButton.addEventListener('click', toggleDarkMode);
}

// تحديث أيقونة الزر بناءً على الوضع الحالي
function updateToggleButtonIcon() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
        toggleButton.style.backgroundColor = isDarkMode ? '#4c51bf' : '#6e8efb';
    }
}