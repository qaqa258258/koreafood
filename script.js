let savedItems = JSON.parse(localStorage.getItem('koreaGluttonySaved')) || [];
let customRestaurants = JSON.parse(localStorage.getItem('koreaCustomRestaurants')) || {};
let currentFilter = 'all';

const grid = document.getElementById('food-grid');
const emptyState = document.getElementById('empty-state');
const badgeCount = document.getElementById('badge-count');
const plateList = document.getElementById('plate-list');

document.addEventListener('DOMContentLoaded', () => {
    // Initial sort by popularity
    rawData.sort((a, b) => b.pop - a.pop);
    renderGrid(rawData);
    updateBadge();
});

function renderGrid(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    data.forEach(item => {
        const isSaved = savedItems.some(i => i.id === item.id);
        const card = document.createElement('div');
        card.className = 'password-card bg-white rounded-3xl p-6 border border-stone-100 shadow-sm flex flex-col justify-between h-full relative';

        // Generate stars for popularity
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<i class="fa-solid fa-star text-[10px] ${i <= item.pop ? 'text-amber-400' : 'text-stone-200'}"></i>`;
        }

        const categoryMap = {
            'meat': '肉食',
            'soup': '汤类',
            'noodle': '面食',
            'street': '小吃',
            'cafe': '咖啡',
            'drink': '下酒',
            'store': '便利店',
            'canteen': '餐厅'
        };

        card.innerHTML = `
            <div class="space-y-4">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col gap-2">
                        <div class="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
                            <i class="fa-solid ${item.icon} text-lg"></i>
                        </div>
                        <div class="flex gap-0.5 px-1">
                            ${starsHtml}
                        </div>
                    </div>
                    <button onclick="toggleSave(${item.id})" class="text-stone-300 hover:text-rose-500 transition-colors focus:outline-none">
                        <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart text-xl ${isSaved ? 'text-rose-500' : ''}"></i>
                    </button>
                </div>
                
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-2xl font-black text-stone-800">${item.cn}</h3>
                        ${item.pop === 5 ? '<span class="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">必吃</span>' : ''}
                    </div>
                    <div class="mt-3 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:bg-rose-50/50 transition-colors cursor-pointer group" onclick="copyText('${item.kr}', '韩文名已复制！可以去点餐了')">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[10px] font-bold text-stone-400 uppercase tracking-widest">韩文 (点击复制)</span>
                            <i class="fa-regular fa-copy text-stone-300 group-hover:text-rose-400 transition-colors"></i>
                        </div>
                        <p class="text-xl font-black text-stone-900 font-sans tracking-wide">${item.kr}</p>
                    </div>
                    <div class="mt-3 flex items-center gap-2 text-stone-400">
                        <i class="fa-brands fa-google text-xs"></i>
                        <span class="text-xs font-bold uppercase tracking-wider">${item.en}</span>
                    </div>
                </div>

                <div class="pt-4 border-t border-stone-50">
                    <p class="text-sm text-stone-500 leading-relaxed italic">
                        <span class="text-rose-400 font-bold mr-1">#</span>${item.desc}
                    </p>
                </div>
            </div>

            <div class="mt-6 pt-4 grid grid-cols-4 gap-2">
                <button onclick="copyText('${item.kr}', '韩文名已复制')" class="flex flex-col items-center justify-center gap-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors">
                    <i class="fa-regular fa-copy text-sm"></i>
                    <span class="text-[10px] font-black">复制韩文</span>
                </button>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Seoul, South Korea ' + item.en)}" target="_blank" class="flex flex-col items-center justify-center gap-1 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl transition-colors">
                    <i class="fa-brands fa-google text-sm"></i>
                    <span class="text-[10px] font-black">Google</span>
                </a>
                <a href="https://map.naver.com/v5/search/${encodeURIComponent('서울 ' + item.kr)}" target="_blank" class="flex flex-col items-center justify-center gap-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors">
                    <i class="fa-solid fa-map-location-dot text-sm"></i>
                    <span class="text-[10px] font-black">Naver</span>
                </a>
                <button onclick="showRestaurants(${item.id})" class="flex flex-col items-center justify-center gap-1 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-colors">
                    <i class="fa-solid fa-store text-sm"></i>
                    <span class="text-[10px] font-black">推荐餐厅</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterItems(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');
            btn.classList.add('bg-stone-800', 'text-white', 'shadow-lg');
        } else {
            btn.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
            btn.classList.remove('bg-stone-800', 'text-white', 'shadow-lg');
        }
    });
    applyFilters();
}

function applyFilters() {
    const filtered = rawData.filter(item => {
        const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
        return matchesCategory;
    });

    // Always sort by popularity descending
    filtered.sort((a, b) => b.pop - a.pop);

    renderGrid(filtered);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedApplyFilters = debounce(applyFilters, 300);


function copyText(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(msg);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-enter');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function toggleSave(id) {
    const index = savedItems.findIndex(i => i.id === id);
    if (index === -1) {
        const item = rawData.find(i => i.id === id);
        savedItems.push(item);
        showToast("已加入必吃清单！");
    } else {
        savedItems.splice(index, 1);
        showToast("已从清单移除");
    }
    localStorage.setItem('koreaGluttonySaved', JSON.stringify(savedItems));
    updateBadge();
    renderSavedList();
    applyFilters();
}

function updateBadge() {
    badgeCount.textContent = savedItems.length;
    badgeCount.classList.toggle('hidden', savedItems.length === 0);
}

function toggleMyPlate() {
    const drawer = document.getElementById('my-plate-drawer');
    const overlay = document.getElementById('overlay');
    const isOpen = !drawer.classList.contains('translate-x-full');

    if (isOpen) {
        drawer.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    } else {
        renderSavedList();
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
        drawer.classList.remove('translate-x-full');
    }
}

function renderSavedList() {
    plateList.innerHTML = '';
    if (savedItems.length === 0) {
        plateList.innerHTML = `
            <div class="flex flex-col items-center justify-center h-64 text-stone-300 space-y-4">
                <i class="fa-solid fa-utensils text-4xl"></i>
                <p class="font-bold">清单还是空的...</p>
            </div>
        `;
        return;
    }

    savedItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'flex justify-between items-center p-4 bg-white rounded-2xl border border-stone-100 shadow-sm';
        el.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div>
                    <p class="font-black text-stone-800 text-sm">${item.cn}</p>
                    <p class="text-[10px] text-stone-400 font-bold">${item.kr}</p>
                </div>
            </div>
            <button onclick="toggleSave(${item.id})" class="text-stone-200 hover:text-rose-500 p-2 transition-colors">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        plateList.appendChild(el);
    });
}

// 显示推荐餐厅模态框
function showRestaurants(itemId) {
    const item = rawData.find(i => i.id === itemId);
    if (!item) return;

    const modal = document.getElementById('restaurant-modal');
    const modalTitle = document.getElementById('restaurant-modal-title');
    const modalContent = document.getElementById('restaurant-modal-content');

    modalTitle.innerHTML = `<i class="fa-solid fa-store"></i> ${item.cn} 推荐餐厅`;

    // 优先使用用户自定义数据，其次使用默认数据
    const restaurants = customRestaurants[itemId] || item.restaurants || [
        { rank: 1, name: '', area: '', note: '', link: '' },
        { rank: 2, name: '', area: '', note: '', link: '' },
        { rank: 3, name: '', area: '', note: '', link: '' },
        { rank: 4, name: '', area: '', note: '', link: '' },
        { rank: 5, name: '', area: '', note: '', link: '' }
    ];

    modalContent.innerHTML = `
        <form id="restaurant-form" class="space-y-4">
            ${restaurants.map((r, idx) => `
                <div class="bg-stone-50 rounded-2xl p-4 space-y-3">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0
                            ${idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-stone-400 text-white' : idx === 2 ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-600'}">
                            ${idx + 1}
                        </span>
                        <input type="text" name="name-${idx}" value="${r.name || ''}" placeholder="餐厅名称"
                            class="flex-1 px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-rose-300">
                    </div>
                    <div class="ml-11 grid grid-cols-2 gap-2">
                        <input type="text" name="area-${idx}" value="${r.area || ''}" placeholder="📍 所在区域"
                            class="px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-300">
                        <input type="text" name="link-${idx}" value="${r.link || ''}" placeholder="🔗 地图链接(可选)"
                            class="px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-300">
                    </div>
                    <div class="ml-11">
                        <input type="text" name="note-${idx}" value="${r.note || ''}" placeholder="💬 推荐理由"
                            class="w-full px-3 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-300">
                    </div>
                </div>
            `).join('')}
            <div class="flex gap-3 pt-4">
                <button type="button" onclick="closeRestaurantModal()" 
                    class="flex-1 py-3 bg-stone-200 text-stone-700 rounded-2xl font-bold hover:bg-stone-300 transition-colors">
                    取消
                </button>
                <button type="submit" 
                    class="flex-1 py-3 bg-rose-500 text-white rounded-2xl font-bold hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                    <i class="fa-solid fa-save"></i> 保存
                </button>
            </div>
        </form>
    `;

    // 绑定表单提交事件
    document.getElementById('restaurant-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveRestaurants(itemId);
    });

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

// 保存餐厅数据
function saveRestaurants(itemId) {
    const form = document.getElementById('restaurant-form');
    const restaurants = [];

    for (let i = 0; i < 5; i++) {
        restaurants.push({
            rank: i + 1,
            name: form.querySelector(`[name="name-${i}"]`).value.trim(),
            area: form.querySelector(`[name="area-${i}"]`).value.trim(),
            note: form.querySelector(`[name="note-${i}"]`).value.trim(),
            link: form.querySelector(`[name="link-${i}"]`).value.trim()
        });
    }

    // 保存到 localStorage
    customRestaurants[itemId] = restaurants;
    localStorage.setItem('koreaCustomRestaurants', JSON.stringify(customRestaurants));

    closeRestaurantModal();
    showToast('餐厅推荐已保存！');
}

// 关闭餐厅模态框
function closeRestaurantModal() {
    const modal = document.getElementById('restaurant-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

