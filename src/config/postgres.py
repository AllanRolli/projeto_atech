import psycopg2

def connect():   
   try:
      conn = None
      #Establishing the connection
      print('Connecting to the PostgreSQL database...')
      conn = psycopg2.connect(
      database="projeto_atech", user='docker', password='docker', host='localhost', port= '5432'
      )
      
      #Creating a cursor object using the cursor() method
      cursor = conn.cursor()  

      #Doping tables if already exists.
      cursor.execute("DROP TABLE IF EXISTS fly")
      cursor.execute("DROP TABLE IF EXISTS plane")
      cursor.execute("DROP TABLE IF EXISTS pilot")
      
      fly_table ='''CREATE TABLE fly(
         fly_id int GENERATED ALWAYS AS IDENTITY,
         plane_id int NOT NULL,
         pilot_id int NOT NULL,
         departure_time date NOT NULL,
         arrived_time date NOT NULL,
         status varchar(255) NOT NULL,
         departure_city varchar(255) NOT NULL,
         destiny_city varchar(255) NOT NULL,
         PRIMARY KEY (fly_id)   
      )'''
      plane_table ='''CREATE TABLE plane(
         plane_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
         fly_id int NOT NULL,
         name varchar NOT NULL,
         PRIMARY KEY (plane_id)         
      )'''
      pilot_table ='''CREATE TABLE pilot(
         pilot_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
         fly_id int NOT NULL,
         name varchar NOT NULL,
         email varchar NOT NULL,
         password_hash varchar NOT NULL,
         PRIMARY KEY (pilot_id)         
      )'''
      alter_fly_table='''ALTER TABLE fly         
         ADD FOREIGN KEY(plane_id) 
         REFERENCES plane(plane_id),         
         ADD FOREIGN KEY(pilot_id)
         REFERENCES pilot(pilot_id)
      '''
      alter_plane_table='''ALTER TABLE plane
         ADD FOREIGN KEY(fly_id) 
         REFERENCES fly(fly_id)
      '''
      alter_pilot_table='''ALTER TABLE pilot
         ADD FOREIGN KEY(fly_id) 
         REFERENCES fly(fly_id)
      '''
      cursor.execute(fly_table)
      print("Table fly successfully........")
      cursor.execute(plane_table)
      print("Table plane successfully........")
      cursor.execute(pilot_table)
      print("Table pilot successfully........")
      cursor.execute(alter_fly_table)
      print("Alter Table fly successfully........")
      cursor.execute(alter_plane_table)
      print("Alter Table plane successfully........")
      cursor.execute(alter_pilot_table)
      print("Alter Table pilot successfully........")
      conn.commit()

      #Closing the connection
      cursor.close()
   except (Exception, psycopg2.DatabaseError) as error:
         print(error)
   finally:
         if conn is not None:
            conn.close()
            print('Database connection closed.')

if __name__ == '__main__':
    connect()