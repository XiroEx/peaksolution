import '../styles/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <p className="services-intro">
        We offer a range of logistics and transportation solutions tailored to meet your needs. Explore our core services below.
      </p>

      <div className='services-images'>
        <img 
          src="https://corlettexpress.com/storage/2021/03/Whats-the-Difference-between-Freight-Management-and-Logistics-Management-2048x1024.webp" 
          alt="Trucking Services" 
        />
        <article className="service">
          <h3>Trucking Services</h3>
          <p>
            Our trucking services ensure reliable and efficient transportation of goods across the country. With a modern fleet of vehicles and highly experienced drivers, we are committed to delivering your shipments on time and in perfect condition. Whether you need long-haul or short-haul trucking, we provide customized solutions to meet your specific requirements. Our focus on safety, efficiency, and customer satisfaction makes us a trusted partner for businesses of all sizes. Let us handle your transportation needs with professionalism and care.
          </p>
        </article>
      </div>

      <div style={{ margin: '40px auto',}}>
        <article className="service" style={{ maxWidth: '500px'}}>
          <h3>Logistics Solutions</h3>
          <p>
            From supply chain management to warehousing, our logistics solutions are designed to optimize your operations and streamline your business processes. We specialize in managing the complexities of logistics, ensuring that your goods are stored, handled, and delivered efficiently. Our team of experts works closely with you to create tailored strategies that align with your goals. By leveraging advanced technology and industry best practices, we help you reduce costs, improve efficiency, and focus on growing your business with confidence.
          </p>
        </article>
      </div>

      <div className="services-images">
        <article className="service">
          <h3>Specialty Services</h3>
          <p>
            We provide tailored solutions for unique transportation needs, including oversized loads, fragile goods, and expedited shipping. Our specialty services are designed to handle even the most challenging logistics requirements with precision and care. Whether you need to transport delicate items, time-sensitive shipments, or non-standard cargo, we have the expertise and resources to get the job done. Trust us to deliver customized solutions that prioritize safety, reliability, and efficiency, ensuring your specialty shipments arrive on time and in perfect condition.
          </p>
        </article>
        <img 
          src="https://thumbs.dreamstime.com/b/truck-industrial-container-cargo-logistic-import-export-yard-83971892.jpg" 
          alt="Specialty Services" 
        />
      </div>
    </section>
  );
};

export default ServicesSection;