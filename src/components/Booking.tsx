import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date) {
      toast({
        title: "Veuillez sélectionner une date",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons rapidement pour confirmer le rendez-vous.",
    });
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Réservez votre consultation gratuite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez un créneau qui vous convient et découvrez comment nous pouvons vous aider
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                Sélectionnez une date
              </h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                  Détails du rendez-vous
                </h3>
                <p className="text-gray-600">
                  Durée : 30 minutes <br />
                  Format : Visioconférence <br />
                  {date && (
                    <>
                      Date sélectionnée : {date.toLocaleDateString("fr-FR")}
                    </>
                  )}
                </p>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleBooking}
              >
                Confirmer le rendez-vous
              </Button>

              <p className="text-sm text-gray-500">
                En confirmant, vous acceptez d'être recontacté pour finaliser la prise de rendez-vous
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
