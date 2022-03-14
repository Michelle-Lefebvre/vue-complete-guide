export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId, // defined in store index
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    fetch('https://teahcujygdtrtrnagwjy.supabase.co/coaches.json');

    context.commit('registerCoach', coachData);
  },
};
