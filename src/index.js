const path = require('path');
const express = require('express');
const { Broker, Investment, Transaction, BalanceUpdate } = require('./models');

const app = express();

// static files
app.use(express.static('public'));

// test all sequelize
const test = async () => {
  const broker = await Broker.create({ name: 'Fooinvest' });
  const investment = await Investment.create({
    name: 'Tesouro Foo',
    BrokerId: broker.get('id')
  });
  await Transaction.create({
    amount: 500,
    date: '2018-03-10',
    InvestmentId: investment.get('id')
  });
  await BalanceUpdate.create({
    amount: 501,
    date: '2018-03-12',
    InvestmentId: investment.get('id')
  });

  const brokerWithDetails = await Broker.findOne({
    include: [
      {
        model: Investment,
        include: [{ model: Transaction }, { model: BalanceUpdate }]
      }
    ]
  });
  console.log(JSON.stringify(brokerWithDetails));
};

test();

//start server
app.listen(process.env.PORT || 5000);
