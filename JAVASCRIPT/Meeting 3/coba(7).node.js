function calculateDiscount(totalPurchase) {
    let discount = 0;

    if (totalPurchase >= 200) {
        discount = 0.15; // Diskon 15%
    } else if (totalPurchase >= 100 && totalPurchase < 200) {
        discount = 0.10; // Diskon 10%
    } else {
        discount = 0; // Tidak ada diskon
    }

    let discountedTotal = totalPurchase - (totalPurchase * discount);
    return discountedTotal;
}

// Test total pembelian
let purchases = [50, 150, 250];
purchases.forEach(total => {
    console.log(`Total Pembelian: ${total}, Setelah Diskon: ${calculateDiscount(total)}`);
});


// Total Pembelian: 50, Setelah Diskon: 50
// Total Pembelian: 150, Setelah Diskon: 135
// Total Pembelian: 250, Setelah Diskon: 212.5
