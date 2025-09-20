// mobile_nav.js - التحكم في القائمة المتنقلة للهاتف
document.addEventListener('DOMContentLoaded', function() {
    // العناصر الأساسية
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');
    
    // تحقق من وجود العناصر
    if (!hamburger || !navLinks || !overlay) {
        console.error('عناصر القائمة غير موجودة في الصفحة');
        return;
    }
    
    // دالة لفتح/إغلاق القائمة
    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // منع التمرير عند فتح القائمة
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
    
    // إضافة event listeners
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // إغلاق القائمة عند النقر على overlay
    overlay.addEventListener('click', function() {
        toggleMenu();
    });
    
    // إغلاق القائمة عند النقر على رابط
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // إغلاق القائمة عند تغيير حجم النافذة إلى حجم كبير
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
