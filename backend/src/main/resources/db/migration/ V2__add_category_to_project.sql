
ALTER TABLE project
ADD COLUMN category VARCHAR(255);

UPDATE project
SET category = 'LAB';

UPDATE project
SET category = 'MAIN'
WHERE title ILIKE '%portfolio%'
   OR title ILIKE '%ecommerce%'
   OR title ILIKE '%saas%';


ALTER TABLE project
ALTER COLUMN category SET NOT NULL;


ALTER TABLE project
ADD CONSTRAINT project_category_check
CHECK (category IN ('MAIN', 'LAB'));