/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import {DataTypes, Model} from 'sequelize';
import {dbInstance} from './connect.js';

export class Customer extends Model { };

Customer.init({
  cid: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isAlpha: true,
    },
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isAlpha: true,
    },
  },
  joining_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  sequelize: dbInstance, tableName: 'customer',
  paranoid: true, timestamps: false,
});


export class Payment extends Model { };

Payment.init({
  payment_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  amount: {
    type: DataTypes.FLOAT(6, 2),
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  status: {
    type: DataTypes.ENUM('FAIL', 'SUCCESS', 'PENDING'),
    allowNull: false,
  },
  txid: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  sequelize: dbInstance,
  tableName: 'payment',
  updatedAt: false,
});

export class Contact extends Model { };

Contact.init({
  // cid: {
  //   type: DataTypes.STRING(10),
  //   primaryKey: true,
  //   references: {
  //     model: Customer,
  //     key: Customer.primaryKeyAttribute,
  //   },
  // },
  address: DataTypes.STRING,
  district: DataTypes.STRING,
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  guardian_phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
}, {sequelize: dbInstance, tableName: 'contact', timestamps: false});

export class Subscripton extends Model { };

Subscripton.init({
  number_of_days: {
    type: DataTypes.TINYINT,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isInt: true,
    },
  },
  renew_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  remaning_days: {
    type: DataTypes.TINYINT,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isInt: true,
    },
  },
  sub_type: {
    type: DataTypes.ENUM('ONE', 'TWO'),
    allowNull: false,
    validate: {
      isIn: [['ONE', 'TWO']],
    },
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
    validate: {
      isIn: [['active', 'inactive']],
    },
  },
}, {sequelize: dbInstance, tableName: 'subscription', timestamps: false});

export class Guest extends Model { };

Guest.init({
  txid: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT(8, 2),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: dbInstance, tableName: 'guest',
  timestamps: true, updatedAt: false,
});

export class Complaints extends Model { };

Complaints.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDateL: true,
    },
  },
  grievance: {
    type: DataTypes.TEXT,
  },
}, {sequelize: dbInstance, tableName: 'complaint', updatedAt: false});

export class Absent extends Model { };

Absent.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  during: {
    type: DataTypes.ENUM('LUNCH', 'DINNER'),
    allowNull: false,
    validate: {
      isIn: [['LUNCH', 'DINNER']],
    },
  },
}, {sequelize: dbInstance, tableName: 'absent'});

Customer.hasOne(Contact);
Contact.belongsTo(Customer);

Customer.hasMany(Payment);
Payment.belongsTo(Customer);

Customer.hasOne(Subscripton);
Subscripton.belongsTo(Customer);

Subscripton.hasOne(Payment);
Payment.hasOne(Subscripton);

Customer.hasMany(Complaints);
Complaints.belongsTo(Customer);

Customer.hasMany(Absent);
Absent.belongsTo(Customer);

export const models = {
  customer: Customer,
  subscription: Subscripton,
  payment: Payment,
  guest: Guest,
  absent: Absent,
  complaints: Complaints,
  contact: Contact,
};
