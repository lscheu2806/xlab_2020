library(tidyverse)

data = read_csv("02_main/data/02_clean_data.csv")
#head(data)

# RT by scenario
data %>% ggplot(aes(x = scenario, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTscenario.png")

# RT by predicate
data %>% ggplot(aes(x = predicate, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTpredicate.png")

# RT by sentence frame
data %>% ggplot(aes(x = sentence_frame, y = RT)) + geom_boxplot()
ggsave("02_main/plots/RTsentence_frame.png")

# plot from the paper

# momentan zaehlt summarize die "n this combination of factors occurs". war wir eigentlich brauchen ist, wie oft pro kombination von faktoren
# die antwort "collective" gegeben wurde, geteilt dadurch, wie oft diese kombination von faktoren ohne den 'response' faktor dran kam.
# beim zweiten group_by wuerde ich intuitiv gerne 'response="collective"' nutzen, aber die Ergebnisse kommen mir dann seltsam vor

plot_data <- data %>%
  select(scenario,predicate,sentence_frame,response) %>%
  group_by(scenario,predicate,sentence_frame) %>%
  #group_by(scenario,predicate,sentence_frame,response) %>%
  #group_by(scenario,predicate,sentence_frame,response="collective") %>%
  mutate(n_condition=n()) %>%
  ungroup() %>%
  #group_by(scenario,predicate,sentence_frame,response) %>%
  group_by(scenario,predicate,sentence_frame,n_condition,response="collective") %>%
  mutate(n_collective_response=n())

head(plot_data)

#plot_data$n <- plot_data$n / nrow(plot_data)

#head(plot_data)

  #ggplot(aes(x=sentence_frame, fill=scenario))  + geom_bar(position = position_dodge()) + facet_wrap(~predicate)

