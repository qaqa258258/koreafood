let savedItems = JSON.parse(localStorage.getItem('globalFoodSaved')) || [];
let currentFilter = 'all';

const grid = document.getElementById('food-grid');
const emptyState = document.getElementById('empty-state');
const badgeCount = document.getElementById('badge-count');
const plateList = document.getElementById('plate-list');

// 主题色配置
const themeColors = {
    korea: '#e11d48', japan: '#dc2626', italy: '#059669',
    usa: '#2563eb', france: '#7c3aed', mexico: '#ea580c',
    asia: '#0d9488', china: '#dc2626'
};

document.addEventListener('DOMContentLoaded', () => {
    switchCuisine('korea');
    updateBadge();
});

// 切换菜系
function switchCuisine(cuisine) {
    currentCuisine = cuisine;
    rawData = cuisineData[cuisine] || [];
    currentFilter = 'all';

    // 更新主题色
    const color = themeColors[cuisine] || '#e11d48';
    document.documentElement.style.setProperty('--theme-color', color);

    // 更新标题
    const config = cuisineConfig[cuisine];
    document.getElementById('main-title').innerHTML = `${config.flag} ${config.name}通关密码本`;
    document.getElementById('nav-title').innerHTML = `${config.flag} 全球美食通关密码本`;

    // 更新分类按钮
    renderCategories(cuisine);

    // 渲染数据
    rawData.sort((a, b) => b.pop - a.pop);
    renderGrid(rawData);
}

// 渲染分类按钮
function renderCategories(cuisine) {
    const container = document.getElementById('filter-container');
    const categories = categoryConfig[cuisine] || [];

    container.innerHTML = categories.map(cat => `
        <button onclick="filterItems('${cat.id}')"
            class="filter-btn px-5 py-2 rounded-full text-sm font-bold transition-all ${cat.id === 'all' ? 'bg-stone-800 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-300 hover:text-rose-600'}"
            data-filter="${cat.id}">${cat.name}</button>
    `).join('');
}

function renderGrid(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    const config = cuisineConfig[currentCuisine];

    data.forEach(item => {
        const isSaved = savedItems.some(i => i.id === item.id && i.cuisine === currentCuisine);
        const card = document.createElement('div');
        card.className = 'password-card bg-white rounded-3xl p-6 border border-stone-100 shadow-sm flex flex-col justify-between h-full';

        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<i class="fa-solid fa-star text-[10px] ${i <= item.pop ? 'text-amber-400' : 'text-stone-200'}"></i>`;
        }

        card.innerHTML = `
            <div class="space-y-4">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col gap-2">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center" style="background: ${themeColors[currentCuisine]}20; color: ${themeColors[currentCuisine]}">
                            <i class="fa-solid ${item.icon} text-lg"></i>
                        </div>
                        <div class="flex gap-0.5 px-1">${starsHtml}</div>
                    </div>
                    <button onclick="toggleSave(${item.id})" class="text-stone-300 hover:text-rose-500 transition-colors">
                        <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart text-xl ${isSaved ? 'text-rose-500' : ''}"></i>
                    </button>
                </div>
                
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-2xl font-black text-stone-800">${item.cn}</h3>
                        ${item.pop === 5 ? '<span class="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full">必吃</span>' : ''}
                    </div>
                    <div class="mt-3 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:bg-rose-50/50 transition-colors cursor-pointer group" onclick="copyText('${item.local}', '已复制！可以去点餐了')">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[10px] font-bold text-stone-400 uppercase tracking-widest">当地语言 (点击复制)</span>
                            <i class="fa-regular fa-copy text-stone-300 group-hover:text-rose-400 transition-colors"></i>
                        </div>
                        <p class="text-xl font-black text-stone-900 tracking-wide">${item.local}</p>
                    </div>
                    <div class="mt-3 flex items-center gap-2 text-stone-400">
                        <i class="fa-brands fa-google text-xs"></i>
                        <span class="text-xs font-bold uppercase tracking-wider">${item.en}</span>
                    </div>
                </div>

                <div class="pt-4 border-t border-stone-50">
                    <p class="text-sm text-stone-500 leading-relaxed italic">
                        <span style="color: ${themeColors[currentCuisine]}" class="font-bold mr-1">#</span>${item.desc}
                    </p>
                </div>
            </div>

            <div class="mt-6 pt-4 grid grid-cols-4 gap-2">
                <button onclick="copyText('${item.local}', '已复制')" class="flex flex-col items-center justify-center gap-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors">
                    <i class="fa-regular fa-copy text-sm"></i>
                    <span class="text-[10px] font-black">复制</span>
                </button>
                <a href="https://map.naver.com/v5/search/${encodeURIComponent(config.mapBase + ' ' + item.local)}" target="_blank" class="flex flex-col items-center justify-center gap-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors">
                    <i class="fa-solid fa-map-location-dot text-sm"></i>
                    <span class="text-[10px] font-black">Naver</span>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Seoul ' + item.en)}" target="_blank" class="flex flex-col items-center justify-center gap-1 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl transition-colors">
                    <i class="fa-brands fa-google text-sm"></i>
                    <span class="text-[10px] font-black">Google</span>
                </a>
                <button onclick="showRestaurants(${item.id})" class="flex flex-col items-center justify-center gap-1 py-2 text-white rounded-xl transition-colors" style="background: ${themeColors[currentCuisine]}">
                    <i class="fa-solid fa-store text-sm"></i>
                    <span class="text-[10px] font-black">推荐</span>
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
    const filtered = rawData.filter(item => currentFilter === 'all' || item.category === currentFilter);
    filtered.sort((a, b) => b.pop - a.pop);
    renderGrid(filtered);
}

function copyText(text, msg) {
    navigator.clipboard.writeText(text).then(() => showToast(msg));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-enter');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function toggleSave(id) {
    const key = `${currentCuisine}-${id}`;
    const index = savedItems.findIndex(i => i.id === id && i.cuisine === currentCuisine);
    if (index === -1) {
        const item = rawData.find(i => i.id === id);
        savedItems.push({ ...item, cuisine: currentCuisine });
        showToast("已加入必吃清单！");
    } else {
        savedItems.splice(index, 1);
        showToast("已从清单移除");
    }
    localStorage.setItem('globalFoodSaved', JSON.stringify(savedItems));
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
        plateList.innerHTML = `<div class="flex flex-col items-center justify-center h-64 text-stone-300 space-y-4">
            <i class="fa-solid fa-utensils text-4xl"></i><p class="font-bold">清单还是空的...</p></div>`;
        return;
    }
    savedItems.forEach(item => {
        const config = cuisineConfig[item.cuisine] || cuisineConfig.korea;
        const el = document.createElement('div');
        el.className = 'flex justify-between items-center p-4 bg-white rounded-2xl border border-stone-100 shadow-sm';
        el.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: ${themeColors[item.cuisine]}20; color: ${themeColors[item.cuisine]}">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div>
                    <p class="font-black text-stone-800 text-sm">${config.flag} ${item.cn}</p>
                    <p class="text-[10px] text-stone-400 font-bold">${item.local}</p>
                </div>
            </div>
            <button onclick="removeSavedItem('${item.cuisine}', ${item.id})" class="text-stone-200 hover:text-rose-500 p-2 transition-colors">
                <i class="fa-solid fa-trash-can"></i>
            </button>`;
        plateList.appendChild(el);
    });
}

function removeSavedItem(cuisine, id) {
    const index = savedItems.findIndex(i => i.id === id && i.cuisine === cuisine);
    if (index !== -1) {
        savedItems.splice(index, 1);
        localStorage.setItem('globalFoodSaved', JSON.stringify(savedItems));
        updateBadge();
        renderSavedList();
        if (cuisine === currentCuisine) applyFilters();
        showToast("已从清单移除");
    }
}

function showRestaurants(itemId) {
    const item = rawData.find(i => i.id === itemId);
    if (!item) return;
    const modal = document.getElementById('restaurant-modal');
    document.getElementById('restaurant-modal-title').innerHTML = `<i class="fa-solid fa-store"></i> ${item.cn} 推荐餐厅`;
    document.getElementById('restaurant-modal-content').innerHTML = `
        <div class="text-center py-10 text-stone-400">
            <i class="fa-solid fa-utensils text-4xl mb-4"></i>
            <p class="font-bold">暂无推荐餐厅</p>
            <p class="text-sm mt-2">敬请期待后续更新~</p>
        </div>`;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeRestaurantModal() {
    const modal = document.getElementById('restaurant-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}
