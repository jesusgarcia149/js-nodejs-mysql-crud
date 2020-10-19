const controller = {};

controller.create = (req, res) => {
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
			console.log(customer);
			res.redirect('/');
		});
	});
};

controller.read = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM customer', (err, customers) => {
			if (err) {
				res.json(err);
			}else{
				res.render('customer', {
					data: customers
				});
			}
		});
	});
};

controller.edit = (req, res) => {
	const { id } = req.params;
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customers) => {
			
			res.render('customer_edit', {
				data: customers[0]
			});
			
		});
	});
};

controller.update = (req, res) => {
	const { id } = req.params;
	const newCustomer = req.body;
	req.getConnection((err, conn) => {
		conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer ,id], (err, rows) => {
			res.redirect('/');
		});
	});
};

controller.delete = (req, res) => {
	const { id } = req.params;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
			res.redirect('/');
		});
	});
};

module.exports = controller;