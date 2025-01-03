import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js'; // مطمئن شوید مسیر صحیح است

const WalletHistory = sequelize.define('WalletHistory', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wallet_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
});

export default WalletHistory;
