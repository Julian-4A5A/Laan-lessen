SELECT
persoon.ID,
account.ID
FROM
persoon
INNER JOIN
account
ON
persoon.ID = account.ID
