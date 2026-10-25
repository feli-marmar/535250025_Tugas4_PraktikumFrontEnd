import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/service";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-400 via-pink-300 to-purple-400 py-20 text-black sm:py-28">
        <Container>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Wujudkan Transformasi Digital Bisnis Anda
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-black-100">
            CodeNova Solutions menghadirkan solusi teknologi yang inovatif sesuai dengan kebutuhan digital bisnis Anda.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/services">Lihat Layanan</Button>
            <Button href="/contact" variant="outline">Hubungi Kami</Button>
          </div>
        </Container>
      </section>

      {/* Layanan unggulan */}
      <section className="py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold sm:text-3xl text-black">Layanan Kami</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-black">
            Solusi untuk kebutuhan digital bisnis Anda.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Statistik */}
      <section className="bg-purple-200 py-14">
        <Container className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            ["150+", "Proyek Selesai"],
            ["80+", "Klien Puas"],
            ["10+", "Tahun Pengalaman"],
            ["25", "Tim Profesional"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-pink-400">{num}</p>
              <p className="mt-1 text-sm text-black">{label}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}