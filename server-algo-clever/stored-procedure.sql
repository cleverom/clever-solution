create table chaka_clever (
	user_id UUID NOT NULL,
	merchant_name VARCHAR(50) NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	date DATE NOT NULL,
	merchant_id UUID NOT NULL
);
--insert into chaka_clever (user_id, merchant_name, product_name, date, merchant_id) values (uuid_generate_v4(), 'Agender', 'Danishes - Mini Raspberry', '2020-07-29', uuid_generate_v4());



CREATE OR REPLACE FUNCTION clever_Data(userId UUID, merchantId UUID)
RETURNS TABLE (
  id                   UUID,
  merchant_name        VARCHAR(150),
  date                 VARCHAR(20),
  product_name		   VARCHAR(40),
  merchant_id		   UUID
)
LANGUAGE sql
AS $$
	SELECT * FROM chaka_clever WHERE user_id = userId AND merchant_id = merchantId ORDER BY date DESC;
$$;

SELECT clever_Data('56ae51d9-504d-4586-b5e6-51866e7ea978', 'b40580c7-48d7-4660-aa31-4bdc6a327f68')