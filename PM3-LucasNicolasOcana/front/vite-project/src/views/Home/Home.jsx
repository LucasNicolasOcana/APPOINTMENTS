import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.paragraph}>
        <h2>BIENVENIDO A CONSULTORIO M3</h2>
        <p>
          Tu destino para cuidado médico de calidad y atención personalizada. En
          Consultorio M3, nos enorgullece ofrecer una amplia gama de servicios
          médicos diseñados para satisfacer tus necesidades de salud y
          bienestar. Ya sea que necesites una consulta de rutina, atención
          especializada o simplemente estés buscando consejos para mantener un
          estilo de vida saludable, nuestro equipo de médicos expertos está aquí
          para ayudarte en cada paso del camino.
        </p>
        <h2>ATENCIÓN MÉDICA INTEGRAL</h2>
        <p>
          Entendemos la importancia de una atención médica integral que se
          adapte a las necesidades individuales de cada paciente. Nuestro equipo
          multidisciplinario de profesionales médicos altamente capacitados está
          dedicado a brindar un enfoque holístico para tu salud y bienestar.
          Desde consultas médicas generales hasta servicios especializados en
          áreas como pediatría, ginecología, cardiología y más, estamos aquí
          para cuidarte a ti y a tu familia en cada etapa de la vida.
        </p>
        <h2>COMPROMISO CON LA EXCELENCIA</h2>
        <p>
          Nuestro compromiso con la excelencia se refleja en cada aspecto de
          nuestra práctica médica. Desde nuestras modernas instalaciones hasta
          nuestro equipo médico de primera clase, nos esforzamos por ofrecer un
          estándar de atención excepcional que supere las expectativas de
          nuestros pacientes. Con tecnología de vanguardia y un enfoque centrado
          en el paciente, puedes confiar en que estás recibiendo la mejor
          atención posible en Consultorio M3.
        </p>
        <h2>TU SALUD, NUESTRA PRIORIDAD</h2>
        <p>
          Tu salud es nuestra máxima prioridad. Nos dedicamos a proporcionar un
          ambiente cálido, acogedor y seguro donde te sientas cómodo y
          bienvenido en todo momento. Desde el momento en que entras por
          nuestras puertas, nuestro objetivo es brindarte una experiencia de
          atención médica excepcional que te deje sintiéndote cuidado, escuchado
          y valorado. En Consultorio M3, estamos aquí para ti, cada paso del
          camino.
        </p>
      </div>
    </div>
  );
}

export default Home;
