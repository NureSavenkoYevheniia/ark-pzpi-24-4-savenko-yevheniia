// ==========================================
// В.1 та В.2: Replace Nested Conditional with Guard Clauses
// ==========================================

// До рефакторингу (В.1)
function calculateOrderTotalBefore(order) {
    let result = 0.0;
    if (order != null) {
        if (order.getItems() != null && order.getItems().length > 0) {
            if (!order.isClosed()) {
                let basePrice = order.calculateBasePrice();
                result = order.isVipCustomer() ? basePrice * 0.85 : basePrice;
            } else { 
                result = 0.0; 
            }
        } else { 
            result = 0.0; 
        }
    } else { 
        result = 0.0; 
    }
    return result;
}

// Після рефакторингу (В.2)
function calculateOrderTotalAfter(order) {
    // Захисні конструкції (Guard Clauses)
    if (!order || order.isClosed() || !order.getItems() || order.getItems().length === 0) {
        return 0.0;
    }
    
    let basePrice = order.calculateBasePrice();
    return order.isVipCustomer() ? basePrice * 0.85 : basePrice;
}


// ==========================================
// В.3 та В.4: Decompose Conditional
// ==========================================

const SUMMER_START = new Date("2026-06-01");
const SUMMER_END = new Date("2026-08-31");
const MAX_SUMMER_QUANTITY = 100;

// До рефакторингу (В.3)
function calculateTariffBefore(date, quantity, winterRate, summerRate, winterServiceCharge) {
    let charge;
    if (date < SUMMER_START || date > SUMMER_END || quantity > MAX_SUMMER_QUANTITY) {
        charge = quantity * winterRate + winterServiceCharge;
    } else {
        charge = quantity * summerRate;
    }
    return charge;
}

// Після рефакторингу (В.4)
function calculateTariffAfter(date, quantity, winterRate, summerRate, winterServiceCharge) {
    let charge;
    if (isSummerSeason(date) && quantity <= MAX_SUMMER_QUANTITY) {
        charge = quantity * summerRate;
    } else {
        charge = quantity * winterRate + winterServiceCharge;
    }
    return charge;
}

function isSummerSeason(date) {
    return date >= SUMMER_START && date <= SUMMER_END;
}


// ==========================================
// В.5 та В.6: Replace Magic Number with Symbolic Constant
// ==========================================

// До рефакторингу (В.5)
function getParticleEnergyBefore(velocity) {
    return 0.5 * 1.42 * Math.pow(velocity, 2); // 1.42 - магічне число (маса частинки)
}

// Після рефакторингу (В.6)
const PARTICLE_MASS_KG = 1.42; // Символьна константа

function getParticleEnergyAfter(velocity) {
    return 0.5 * PARTICLE_MASS_KG * Math.pow(velocity, 2);
}

module.exports = {
    calculateOrderTotalBefore,
    calculateOrderTotalAfter,
    calculateTariffBefore,
    calculateTariffAfter,
    getParticleEnergyBefore,
    getParticleEnergyAfter
};
